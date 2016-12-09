export class Demo {
    language: string = "rb";
    smallLanguage: string = "rb";
    includePath: string = "src/code/sample.rb"
    
    onLanguageChange() {
        this.smallLanguage = this.language;
        this.includePath = "src/code/sample." + this.language;
    }
    
    onSmallLanguageChange() {
        this.language = this.smallLanguage;
        this.includePath = "src/code/small/sample." + this.smallLanguage;
    }
}
