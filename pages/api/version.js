import pkg from '../../package.json';

export default function handler(req, res) {
    res.status(200).json({ version: pkg.version });
}
