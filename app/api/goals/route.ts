import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb"

export async function GET() {
  const uri = process.env.MONGODB_URI as string
  const client = new MongoClient(uri)

    try {
      client.connect()
      const database = client.db('test')
      const goals = await database.collection('goals').aggregate().toArray()
      return NextResponse.json(goals, { status: 200 })
    } catch {
      return NextResponse.json("An error occurred while retrieving the data.", { status: 500 })
    } finally {
        await client.close()
    }
}

export async function POST(request: NextRequest) {
  const goal = await request.json()
  const uri = process.env.MONGODB_URI as string
  const client = new MongoClient(uri)

    try {
      client.connect()
      const database = client.db('test')
      const collection = database.collection('goals')
      await collection.insertOne(goal)
      return NextResponse.json("Data inserted successfully.", { status: 200 })
    } catch {
      return NextResponse.json("An error occurred while inserting the data.", { status: 500 })
    } finally {
        await client.close()
    }
}
