import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Log the email signup (in production, you'd save to a database)
    console.log('New waitlist signup:', email)

    // Return success response
    return NextResponse.json(
      { message: 'Successfully joined waitlist!', email },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    )
  }
}
