const Lang = imports.lang;
const Extension = imports.misc.extensionUtils.get_text_translator_extension();
const TranslationProviderBase = Extension.imports.translation_provider_base;

const ENGINE = 'Google'

const Translator = new Lang.Class({
    Name: ENGINE,
    Extends: TranslationProviderBase.TranslationProviderBase,

    _init() {
        this.engine = ENGINE
        this.parent(ENGINE+'.Translate');
    },
});
