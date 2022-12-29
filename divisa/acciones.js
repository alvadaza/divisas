import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@ManagedBean
@SessionScoped
public class TradingBean {
  private String company;
  private int quantity;
  private double price;
  private String action;

  public String getCompany() {
    return company;
  }
  public void setCompany(String company) {
    this.company = company;
  }
  public int getQuantity() {
    return quantity;
  }
  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }
  public double getPrice() {
    return price;
  }
  public void setPrice(double price) {
    this.price = price;
  }
  public String getAction() {
    return action;
  }
  public void setAction(String action) {
    this.action = action;
  }

  public String executeTrade() {
    // Realizar la compra o venta de acciones aquí
    return "success";
  }
}
