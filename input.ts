function getinfo() {
    const nameinput = document.getElementById("username") as HTMLInputElement;
    const emailinput = document.getElementById("useremail") as HTMLInputElement;
    const ageinput = document.getElementById("userage") as HTMLInputElement;

    const name: string = nameinput.value;
    const email: string = emailinput.value;
    const age: string = ageinput.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
}