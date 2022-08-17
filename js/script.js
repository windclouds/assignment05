const $ = selector => document.querySelector(selector);
document.addEventListener("DOMContentLoaded", () =>{
    $("#empForm").addEventListener("submit", evt => {
        evt.preventDefault();
        const id = $("#id").value;
        const name = $("#name").value;
        const ext = $("#ext").value;
        const email = $("#email").value;
        const department = $("#department").value;
        console.log(`ID: ${id}`);
        console.log(`Name: ${name}`);
        console.log(`Extension: ${ext}`);
        console.log(`Email: ${email}`);
        console.log(`Department: ${department}`)
    })})