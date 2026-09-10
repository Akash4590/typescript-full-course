
var userdata: {
  name: string;
  age: number;
  company: string;
  address: {
    houseno: string;
    sector: string;
    city: string;
  };
} = {
  name: "Akash",
  age: 23,
  company: "kkit solution",
  address: {
    houseno: "house no a-60",
    sector: "70-a",
    city: "multan"
  }
};

userdata.name = "Ali";

console.log(userdata);
