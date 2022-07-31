import i18n from '../languageHelper/I18n/i18n'
import data from '../../src/data/db.json'
import frData from '../../src/data/fr.json'

export const getData = () => (
    new Promise((resolve, reject) => {
        console.log('currrent language : ', i18n.locale)
        switch (i18n.locale) {
            case 'en':
                resolve(data)
                return
            case 'fr':
                resolve(frData)
                return
        }
    })
    // axios.get(`my api here/${i18n.locale}`)
)