import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb"

export async function POST(request: NextRequest) {
  const user = await request.json()
  const uri = process.env.MONGODB_URI as string
  const client = new MongoClient(uri)

    try {
      client.connect()
      const database = client.db('test')
      const collection = database.collection('users')
      await collection.insertOne(user)
      return NextResponse.json("Data inserted successfully.", { status: 200 })
    } catch {
      return NextResponse.json("An error occurred while inserting the data.", { status: 500 })
    } finally {
        await client.close()
    }
}
