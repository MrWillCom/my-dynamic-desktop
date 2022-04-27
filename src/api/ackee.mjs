import fetch from 'node-fetch';
import logPrefix from '../prefix.mjs';

const endpoint = process.env.ACKEE_ENDPOINT
const token = process.env.ACKEE_TOKEN
const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone

export default async (req, res) => {
    try {
        const response = await fetch(endpoint, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Time-Zone': timeZone,
            },
            body: JSON.stringify({
                query: `
				{
					facts {
						activeVisitors
						viewsToday
						viewsMonth
						viewsYear
					}
				}
			`,
            }),
        })

        if (response.ok === false) {
            const text = await response.text()
            console.log(`${logPrefix.time()} ${logPrefix.error} ${text}`)
            console.error(new Error(text))
            return;
        }

        const json = await response.json()

        if (json.errors != null) {
            const message = json.errors[0].message
            console.log(`${logPrefix.time()} ${logPrefix.error} ${message}`)
            console.error(new Error(message))
            return;
        }

        res.send(JSON.stringify(json.data))
        console.log(`${logPrefix.time()} ${logPrefix.success} ${logPrefix.methods.get} ${req.path}`)
    } catch (err) {
        console.log(`${logPrefix.time()} ${logPrefix.error} ${err.message ? err.message : ''}`)
        console.error(err)
    }
}
