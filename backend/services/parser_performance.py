import time


def measure_parser_time(parser_function, file_path):

    start = time.perf_counter()

    parser_function(file_path)

    end = time.perf_counter()

    return {
        "execution_time_seconds": round(end - start, 4)
    }