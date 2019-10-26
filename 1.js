function biodata(name, age){
    let address = "Jln. 7 Suku Pasar Inpres, Padang Baru, Jorong IV, Surabayo, Kec. Lubuk Basung, Kab. Agam, Sumatera Barat";
    let hobbies = ["Main Game", "Programming", "Basket Ball"];
    let is_married = false;
    let list_school = [
        {name: "SDN 63 SURABAYO", year_in: 2003},
        {name: "SMPN 3 LUBUK BASUNG", year_in: 2009},
        {name: "SMKN 1 TANJUNG RAYA", year_in: 2012},
        {name: "STMIK JAYANUSA", year_in: 2015}
    ];
    let skills = [
        {skill_name: "Ms. Office", level: "expert"},
        {skill_name: "Networking", level: "advanced"},
        {skill_name: "Teknik Komputer", level: "advanced"},
        {skill_name: "Desktop Programming", level: "advanced"},
        {skill_name: "Web Programming", level: "advanced"},
        {skill_name: "Mobile Programming", level: "beginner"}
    ];
    let interest_in_coding = true;

    let output = {name: name, age: parseInt(age), address: address, hobbies: hobbies, is_married: is_married, list_school: list_school, skills: skills, interest_in_coding: interest_in_coding};

    return JSON.stringify(output);
}

console.log(biodata("Yori Hadi Putra", "22"));