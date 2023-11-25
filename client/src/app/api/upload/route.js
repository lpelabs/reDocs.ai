import multer from 'multer';
import AdmZip from 'adm-zip';
import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'

// const storage = multer.memoryStorage();
// const upload = multer({ storage }).single('file');

export async function POST(request) {
    try {
        const data = await request.formData()
        const file = data.get('file')

        if (!file) {
            return NextResponse.json({ success: false })
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const zip = new AdmZip(buffer);
        const zipEntries = zip.getEntries();

        // Extract entry names
        const entryNames = zipEntries.map((entry) => entry.entryName);
        // const path = `./tmp/${file.name}`
        // await writeFile(path, buffer)
        console.log(entryNames)

        return NextResponse.json({ success: true, entries: entryNames }, { status: 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
