import csv

results_raw = []

with open('results.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    for row in csv_reader:
        results_raw.append(row)

# print(results_raw)


party_mapping = {
    'C': 'Conservative Party',
    'L': 'Labour Party',
    'UKIP': 'UKIP',
    'LD': 'Liberal Democrats',
    'G': 'Green Party',
    'Ind': 'Independent',
    'SNP': 'SNP'
}


def printFormattedResult(result):
    print(result[0])

    total_votes = 0

    for x in range(1, len(result)):
        if x % 2 != 0:
            total_votes += int(result[x])

    for x in range(1, len(result)):
        if x % 2 == 0:
            print(f'{party_mapping[result[x].strip()]}: {round(int(result[x-1]) / total_votes * 100, 1)}%')

for r in results_raw:
    printFormattedResult(r)
