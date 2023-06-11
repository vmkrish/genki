import csv
import json
import sys

def read_file(fpath):
    with open(fpath) as f:
        reader = csv.DictReader(f)
        return [row for row in reader]
    
def write_file(rows, fpath):
    with open(fpath, 'w', encoding='utf-8') as f:
        for row in rows:
            row['Meaning'] = row.pop('Definition')
        f.write(json.dumps(rows, indent=1))

if __name__ == '__main__':
    if len(sys.argv) != 2:
        raise RuntimeError(f'Need to pass in filename as first arg.\nGot {sys.argv}')
    fname = sys.argv[1]
    rows = read_file(fname)
    write_file(rows, 'vocab.json')

