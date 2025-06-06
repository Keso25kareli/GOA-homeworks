function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  
    this.getSummary = function() {
      return this.title + " - " + this.author + " (" + this.year + ")";
    };
  }
  
  let one = new Book("ჰარი პოტერი", "როულინგი", 1997);
  let two = new Book("მკვლელობა აღმოსავლეთ ექსპრესში", "აგათა კრისტი", 1934);
  let three = new Book("შერლოკი", "დოილი", 1887);
  
  console.log(one.getSummary());
  console.log(two.getSummary());
  console.log(three.getSummary());