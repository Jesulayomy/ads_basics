function boredom(staff) {
    let boredomLevel = 0;
    const department = {
      "accounts" : 1,
      "finance" : 2,
      "canteen" : 10,
      "regulation" : 3,
      "trading" : 6,
      "change" : 6,
      "IS" : 8,
      "retail" : 5,
      "cleaning" : 4,
      "pissing about" : 25
    }
    for (let name in staff) {
      if(department[staff[name]] !== undefined) {
        boredomLevel += department[staff[name]];
      }
    }
    return boredomLevel <= 80 ? "kill me now" : boredomLevel < 100 ? "i can handle this" : "party time!!";
}