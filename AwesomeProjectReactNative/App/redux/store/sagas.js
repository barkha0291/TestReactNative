import homeWatcher from "../actions/home/index";

export default function* IndexSaga () {
    yield[
        homeWatcher(),
    ]
}