FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    libzip-dev \
    libicu-dev \
    git \
    unzip \
    && docker-php-ext-install \
    intl \
    pdo \
    pdo_mysql \
    zip

# Configuration PHP
RUN echo "date.timezone = Europe/Paris" > /usr/local/etc/php/conf.d/timezone.ini \
    && echo "memory_limit = 256M" > /usr/local/etc/php/conf.d/memory.ini \
    && echo "max_execution_time = 60" > /usr/local/etc/php/conf.d/execution_time.ini \
    && echo "upload_max_filesize = 20M" > /usr/local/etc/php/conf.d/uploads.ini \
    && echo "post_max_size = 20M" >> /usr/local/etc/php/conf.d/uploads.ini

# Configuration PHP-FPM
RUN echo "pm = dynamic" > /usr/local/etc/php-fpm.d/zzz-docker.conf \
    && echo "pm.max_children = 20" >> /usr/local/etc/php-fpm.d/zzz-docker.conf \
    && echo "pm.start_servers = 2" >> /usr/local/etc/php-fpm.d/zzz-docker.conf \
    && echo "pm.min_spare_servers = 1" >> /usr/local/etc/php-fpm.d/zzz-docker.conf \
    && echo "pm.max_spare_servers = 3" >> /usr/local/etc/php-fpm.d/zzz-docker.conf \
    && echo "request_terminate_timeout = 300" >> /usr/local/etc/php-fpm.d/zzz-docker.conf

# Installation de Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configuration du répertoire de travail
WORKDIR /var/www/html

# Permissions utilisateur
RUN usermod -u 1000 www-data

# Copie des fichiers de l'application
COPY --chown=www-data:www-data . .

# Installation des dépendances
RUN composer install --no-interaction --optimize-autoloader

# Nettoyage du cache et fixation des permissions
RUN chown -R www-data:www-data /var/www/html/var \
    && chmod -R 777 /var/www/html/var

USER www-data

CMD ["php-fpm"]
EXPOSE 9000 