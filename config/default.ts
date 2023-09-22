const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS


export default{ // exporta os arquvios de configuraçoes para nao passar pelo App.ts
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.fs69lpg.mongodb.net/`,
    env: "development"
}