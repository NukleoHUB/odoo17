FROM odoo:17

# Mudar para o usuário root temporariamente para instalação de pacotes
USER root

# Instalar dependências adicionais necessárias
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive \
    apt-get install -y --no-install-recommends \
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
        libssl-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Definir o diretório de trabalho
WORKDIR /usr/lib/python3/dist-packages/odoo

# Copiar addons adicionais
COPY ./extra-addons /usr/lib/python3/dist-packages/odoo/extra-addons
COPY ./enterprise /usr/lib/python3/dist-packages/odoo/enterprise
COPY ./design-themes /usr/lib/python3/dist-packages/odoo/design-themes

# Copiar o arquivo de configuração do Odoo
COPY ./odoo.conf /etc/odoo/

# Copiar o arquivo de dependências do Python
COPY ./requirements.txt /usr/lib/python3/dist-packages/odoo/requirements.txt

# Verificar a existência do arquivo requirements.txt
RUN ls -l /usr/lib/python3/dist-packages/odoo/requirements.txt

# Atualizar o pip e instalar as dependências do Python
RUN pip3 install --upgrade pip && \
    pip3 install --no-cache-dir -r /usr/lib/python3/dist-packages/odoo/requirements.txt

# Configurar permissões seguras para diretórios críticos
RUN mkdir -p /var/lib/odoo/sessions && \
    chown -R odoo:odoo /usr/lib/python3/dist-packages/odoo/extra-addons /etc/odoo /var/lib/odoo && \
    chmod -R 755 /var/lib/odoo /usr/lib/python3/dist-packages/odoo && \
    chmod -R 700 /var/lib/odoo/sessions

# Retornar ao usuário Odoo para executar o container com segurança
USER odoo

# Comando padrão para iniciar o Odoo
CMD ["odoo"]

