import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

// Add static export configuration
export const dynamic = 'force-static';

export async function GET(request: NextRequest) {
  try {
    // Path to the resume in the assets folder
    const resumePath = join(process.cwd(), 'src', 'assets', 'Sachin_Bhopi_Lead_UI_Developer_SDE3.pdf');
    
    // Read the file
    const fileBuffer = readFileSync(resumePath);
    
    // Create response with proper headers
    const response = new NextResponse(fileBuffer);
    
    // Set headers for file download
    response.headers.set('Content-Type', 'application/pdf');
    response.headers.set('Content-Disposition', 'attachment; filename="Sachin_Bhopi_Lead_UI_Developer_SDE3.pdf"');
    response.headers.set('Cache-Control', 'no-cache');
    
    return response;
  } catch (error) {
    console.error('Error serving resume:', error);
    return NextResponse.json(
      { error: 'Resume not found' },
      { status: 404 }
    );
  }
}
