const Extension = imports.misc.extensionUtils.get_text_translator_extension();
const TranslationProviderBase = Extension.imports.translation_provider_base;

const ENGINE = 'Google'

const Translator = class extends TranslationProviderBase.TranslationProviderBase {

    constructor() {
        this.engine = ENGINE
        this.parent(ENGINE+'.Translate');
    }
}
