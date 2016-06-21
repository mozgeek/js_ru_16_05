import { ADD_COMMENT } from '../constants'
import { normalizedComments} from '../fixtures'
import { fromArray } from '../utils'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    entities: fromArray(normalizedComments),
    loading: false
})

export default (comments = defaultState, action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case ADD_COMMENT: return comments.setIn(['entities', randomId.toString()], fromJS({...payload.comment, id: randomId}))
    }

    return comments
}