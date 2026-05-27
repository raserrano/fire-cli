import * as crypto from 'node:crypto'
import * as fs from 'fs'

const algorithm = 'aes-256-cbc'
const iterations = 100000
const keyLength = 32
const ivLength = 16

// Derive key and IV from password and salt
function deriveKeyAndIV (password, salt) {
  const key = crypto.pbkdf2Sync(password, salt, iterations, keyLength, 'sha256')
  const iv = key.slice(0, ivLength)
  return { key, iv }
}

// Encrypt file
export function encryptFile (filePath, password) {
  const fileData = fs.readFileSync(filePath)
  const salt = crypto.randomBytes(16)
  const { key, iv } = deriveKeyAndIV(password, salt)

  const cipher = crypto.createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(fileData)
  encrypted = Buffer.concat([encrypted, cipher.final()])

  // Prepend salt and IV to the encrypted data
  const encryptedContent = Buffer.concat([salt, iv, encrypted])
  fs.writeFileSync(filePath + '.enc', encryptedContent)
  console.log('File encrypted successfully.')
}

// Decrypt file
export function decryptFile (filePath, password) {
  const encryptedData = fs.readFileSync(filePath)
  const salt = encryptedData.slice(0, 16)
  const iv = encryptedData.slice(16, 32)
  const encryptedContent = encryptedData.slice(32)

  const { key } = deriveKeyAndIV(password, salt)
  const decipher = crypto.createDecipheriv(algorithm, key, iv)

  let decrypted = decipher.update(encryptedContent)
  decrypted = Buffer.concat([decrypted, decipher.final()])
  return decrypted.toString()
}
