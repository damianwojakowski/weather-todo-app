export const ACTIONS = {
    UPDATE: "UPDATE"
};

export function updateWeather(payload) {
    return {
        type: ACTIONS.UPDATE,
        payload
    };
}
