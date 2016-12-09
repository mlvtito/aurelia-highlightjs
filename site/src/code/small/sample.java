import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Paths;

class DeleteFile {
  private String uri =
      "file:///tmp.txt";
  
  public void delete() {
    try {
      Files.delete(
        Paths.get(
          new URI(uri)
        )
      );
    } catch (Exception e) {
      // never do that
      e.printStackTrace();
    }
  }
}
