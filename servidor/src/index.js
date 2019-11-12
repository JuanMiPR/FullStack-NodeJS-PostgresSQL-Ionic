import app from "./app";

async function main(){
    await app.listen(40000);
    console.log("server on por 40000")
}

main();