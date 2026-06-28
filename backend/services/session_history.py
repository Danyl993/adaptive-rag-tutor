_history = []


def add_session(session):

    _history.append(session)


def get_history():

    return _history


def clear_history():

    _history.clear()

def delete_session(index):

    if 0 <= index < len(_history):
        _history.pop(index)