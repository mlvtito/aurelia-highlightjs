export class App {
    theme: string;
    language: string = "java";
    includePath: string = "src/code/sample.java"
    
    onLanguageChange() {
        this.includePath = "src/code/sample." + this.language;
    }
    
    changeTheme() {
        alert(this.theme);
    }
}