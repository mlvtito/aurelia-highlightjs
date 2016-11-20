export class Demo {
    language: string = "java";
    includePath: string = "src/code/sample.java"
    
    onLanguageChange() {
        this.includePath = "src/code/sample." + this.language;
    }
}
