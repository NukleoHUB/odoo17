FROM odoo:17

USER root
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libffi-dev \
    libxmlsec1-dev \
    libxml2-dev \
    libxslt1-dev \
    libxml2 \
    libxmlsec1 \
    python3-dev \
    pkg-config \
    libsasl2-dev \
    libldap2-dev \
    libssl-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copiar addons adicionais
COPY ./extra-addons /usr/lib/python3/dist-packages/odoo/extra-addons
COPY ./enterprise /usr/lib/python3/dist-packages/odoo/enterprise
# Definir o diretório de trabalho

WORKDIR /usr/lib/python3/dist-packages/odoo

COPY ./requirements.txt /usr/lib/python3/dist-packages/odoo/requirements.txt

# Verificar se o arquivo requirements.txt está presente
RUN ls -l /usr/lib/python3/dist-packages/odoo/requirements.txt

# Atualizar o pip e instalar as dependências
RUN pip3 install --upgrade pip \
    && pip3 install --no-cache-dir -r /usr/lib/python3/dist-packages/odoo/requirements.txt

# Copiar o arquivo de configuração do Odoo
COPY ./odoo.conf /etc/odoo/

# Definir permissões adequadas
RUN chown -R odoo:odoo /usr/lib/python3/dist-packages/odoo/extra-addons /etc/odoo/

# Concede permissões totais às pastas necessárias
RUN chmod -R 777 /var/lib/odoo /usr/lib/python3/dist-packages/odoo

# Garantir que o diretório de sessões exista e tenha permissões corretas
RUN mkdir -p /var/lib/odoo/sessions \
    && chmod -R 777 /var/lib/odoo/sessions \
    && chown -R odoo:odoo /var/lib/odoo/sessions

# Ajustar permissões para todo o diretório de dados do Odoo
RUN chmod -R 777 /var/lib/odoo \
    && chown -R odoo:odoo /var/lib/odoo

USER odoo

CMD ["odoo"]