import os
import json
import base64
BASE_PATH = os.getcwd()

def get_directory_map(path):
    directory_map = {}
    base64_issues = {}
    # For every element (file and directory) in the given path
    for directory in os.listdir(path):
        # create a new path object for the elements
        directory_path = os.path.join(path, directory)
        # if the element is a directory
        if os.path.isdir(directory_path):
            # initialise an array for the files in the directory
            files = []
            # for every file in the directory
            for file in os.listdir(directory_path):
                # if the file is a word document
                if file.endswith(".docx"):
                    # create the new filepath for the doc file
                    filepath = directory_path + '/' + file
                    # read the document
                    read_word_file = open(filepath, "rb").read()
                    # Base64 the current word file in the loop in the list.
                    encode_word_file = base64.b64encode(read_word_file)
                    encoded_word_file = encode_word_file.decode()
                    # create the issue name by stripping the file extension off the doc file
                    issue_name = file.split(".")[0]
                    # add the issue name to the files array
                    files.append(issue_name)
                    # add the issue name and the base64 issue to the dictionary
                    base64_issues.update({issue_name: encoded_word_file})
            if files:
                # if the files array exists add it to the dictionary with the directory name as the key
                directory_map[directory] = files
    # return an array object containing the map of directories and issue names, aswell as the map of issue names to base64 word encodings
    return [directory_map, base64_issues]


def save_to_json(data, filename):
    # Extract the data from the array
    directory_map = data[0]
    base64_issues = data[1]
    # write the data to a file.
    with open(filename, "w") as outfile:
        outfile.write("export const issues = ")
        json.dump(directory_map, outfile)
        outfile.write("\nexport const base64 = ")
        json.dump(base64_issues, outfile)

path = BASE_PATH + "/taskpane/templates"
data = get_directory_map(path)
save_to_json(data, BASE_PATH + "/taskpane/findings.js")
