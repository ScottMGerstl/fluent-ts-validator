"use strict";

import {
    ValidationOptionsBuilder
} from "./";

import {
    AlphaLocale,
    AlphanumericLocale,
    CurrencyOptions,
    EmailOptions,
    FqdnOptions,
    UrlOptions,
    UuidVersion
} from "../shared";

export interface StringValidatorBuilder<T> {
    contains(seed: string): ValidationOptionsBuilder<T>;
    isAlphanumeric(locale?: AlphanumericLocale): ValidationOptionsBuilder<T>;
    isAlpha(locale?: AlphaLocale): ValidationOptionsBuilder<T>;
    isAscii(): ValidationOptionsBuilder<T>;
    isBase64(): ValidationOptionsBuilder<T>;
    isBooleanString(): ValidationOptionsBuilder<T>;
    isCurrency(options?: CurrencyOptions): ValidationOptionsBuilder<T>;
    isDateString(): ValidationOptionsBuilder<T>;
    isDecimalString(): ValidationOptionsBuilder<T>;
    isEmail(options?: EmailOptions): ValidationOptionsBuilder<T>;
    isFqdn(options?: FqdnOptions): ValidationOptionsBuilder<T>;
    isLowercase(): ValidationOptionsBuilder<T>;
    isNumericString(): ValidationOptionsBuilder<T>;
    isUrl(options?: UrlOptions): ValidationOptionsBuilder<T>;
    isUppercase(): ValidationOptionsBuilder<T>;
    isUuid(version?: UuidVersion): ValidationOptionsBuilder<T>;
    matches(pattern: RegExp, modifiers?: string): ValidationOptionsBuilder<T>;
}