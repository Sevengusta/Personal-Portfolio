import { NextRequest, NextResponse } from "next/server";
const fs = require('fs')
const path = require('path')

export async function POST(request: NextRequest) {
    const data = request.json();

    const filePath = path.resolve(process.cwd(), 'app/data/submission.json')

    let submission: any = [];
    try {
        const data = fs.readFileSync(filePath, 'utf8')
        submission = JSON.parse(data)
    } catch (error) {
        console.error("erro na leitura do arquivo", error)
    }
    submission.push(data)
    try {
        const NewData = JSON.stringify(submission, null, 2 )
        fs.writeFileSync(filePath, NewData, "utf8")
    } catch (error) {
        console.error("erro ao escrever esse arquivo", error)

    }
    return NextResponse.json({
        data: data,
        message: "Essa mensagem foi enviada com sucesso",
    })

}

export async function GET() {
    return NextResponse.json({
        message: "It's time to Code!!!",
    })
}