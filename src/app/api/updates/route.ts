import { NextResponse } from 'next/server';
import { getCachedUpdates } from '@/lib/rss';

export async function GET() {
  try {
    const updates = await getCachedUpdates();
    
    return NextResponse.json({
      success: true,
      data: updates,
      lastUpdated: new Date().toISOString(),
      source: 'RSS feeds'
    });
  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch updates',
        data: []
      },
      { status: 500 }
    );
  }
}

// Cache this API route for 1 hour
export const revalidate = 3600;
