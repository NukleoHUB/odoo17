FROM odoo:17

USER root

# Instalar dependências adicionais necessárias para o Odoo e a compilação de estilos
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
        libssl-dev \
        nodejs \
        npm \
        wget && \
    npm install -g less less-plugin-clean-css rtlcss && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Definir o diretório de trabalho
WORKDIR /usr/lib/python3/dist-packages/odoo

# Copiar addons adicionais e temas de design
COPY ./extra-addons /usr/lib/python3/dist-packages/odoo/extra-addons
COPY ./enterprise /usr/lib/python3/dist-packages/odoo/enterprise


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
    chown -R odoo:odoo /usr/lib/python3/dist-packages/odoo/extra-addons /etc/odoo /var/lib/odoo /usr/lib/python3/dist-packages/odoo/enterprise && \
    chmod -R 755 /var/lib/odoo /usr/lib/python3/dist-packages/odoo && \
    chmod -R 700 /var/lib/odoo/sessions

# Retornar ao usuário Odoo para execução segura
USER odoo

# Comando padrão para iniciar o Odoo
CMD ["odoo"]
