const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000

const referralCodes = ["RHRFEVD"]

app.get("/lime", (req, res) => {
    const randCode = referralCodes[Math.floor(Math.random() * referralCodes.length)]
    const url = `https://limebike.app.link/referralcodes?promo_code=${randCode}`
    res.redirect(url)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});