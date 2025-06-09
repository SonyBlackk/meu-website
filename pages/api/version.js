import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    res.status(200).json({ version: packageJson.version });
}
