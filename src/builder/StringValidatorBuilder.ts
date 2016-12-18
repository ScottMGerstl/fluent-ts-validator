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
    UuidVersion
} from "../shared";

export interface StringValidatorBuilder<T> {
    contains(seed: string): ValidationOptionsBuilder<T>;
    isAlphanumericString(locale?: AlphanumericLocale): ValidationOptionsBuilder<T>;
    isAlphaString(locale?: AlphaLocale): ValidationOptionsBuilder<T>;
    isAscii(): ValidationOptionsBuilder<T>;
    isBase64(): ValidationOptionsBuilder<T>;
    isBooleanString(): ValidationOptionsBuilder<T>;
    isCurrency(options?: CurrencyOptions): ValidationOptionsBuilder<T>;
    isDateString(): ValidationOptionsBuilder<T>;
    isDecimalString(): ValidationOptionsBuilder<T>;
    isEmail(options?: EmailOptions): ValidationOptionsBuilder<T>;
    isFQDN(options?: FqdnOptions): ValidationOptionsBuilder<T>;
    isNumericString(): ValidationOptionsBuilder<T>;
    isUUID(version?: UuidVersion): ValidationOptionsBuilder<T>;
}