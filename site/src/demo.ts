export class Demo {
    language: string = "rb";
    smallLanguage: string = "rb";
    includePath: string = "src/code/sample.rb"
    
    onLanguageChange() {
        this.includePath = "src/code/sample." + this.language;
    }
    
    onSmallLanguageChange() {
        this.includePath = "src/code/small/sample." + this.smallLanguage;
    }
}
