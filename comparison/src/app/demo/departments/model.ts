export class Athlete {
    athlete?: string;
    age?: number;
    country?: string;
    year?: string;
    date?: string;
    sport?: string;
    gold?: number;
    silver?: number;
    bronze?: number;
    total?:number
    
  }

  
  export class Order {
    public OrderID?: number;
    public CustomerID?: string;
    public EmployeeID?: number;
    public OrderDate?: Date;
    public RequiredDate?: Date;
    public ShippedDate?: Date;
    public ShipVia?: number;
    public Freight?: number;
    public ShipName?: string;
    public ShipAddress?: string;
    public ShipCity?: string;
    public ShipRegion?: string;
    public ShipPostalCode?: string;
    public ShipCountry?: string;
  }
  
  export class Customer {
    public Id = "";
    public CompanyName = "";
    public ContactName = "";
    public ContactTitle = "";
    public Address?: string = "";
    public City = "";
    public PostalCode? = "";
    public Country? = "";
    public Phone? = "";
    public Fax? = "";
  }
  
  export class Survey {
    public Name?: string;
    public NoSurveyScheuled?: string;
    public Expired?: string;
    public In30days?: string;
    public In31to60days?: string;
    public In61to90days?: string;
    public Commenced?: string;
    public NullCertificate?: string;
  }
  