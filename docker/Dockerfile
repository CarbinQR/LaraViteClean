FROM php:fpm-alpine3.19

RUN apk add --no-cache --virtual build-dependencies gettext-dev icu-dev libxml2-dev $PHPIZE_DEPS linux-headers  \
    && apk add --no-cache libpng-dev postgresql-dev \
    && docker-php-ext-install -j$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) mysqli opcache pdo_mysql xml fileinfo pdo exif gettext pdo_pgsql \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && apk del gettext-dev \
    && apk add bash \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

ADD ./containers/php/xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini