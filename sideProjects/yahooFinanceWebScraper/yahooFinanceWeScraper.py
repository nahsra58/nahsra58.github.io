import requests
from bs4 import BeautifulSoup
import csv
import os


fileName = "yahooFinanceWebScraper\portfolio.csv"
os.remove(fileName)
file = open(fileName, 'w')
file.write("Ticker, Price")
file.write("\n")

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

tickers = []
while True:
    ticker = input("Enter ticker name or press enter to continue\n")
    if ticker == "":
        break
    tickers.append(ticker)

for i in tickers:
    url = 'https://finance.yahoo.com/quote/' + i + '?p=' + i + '&.tsrc=fin-srch'
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    fin_streamer_tag = soup.find('fin-streamer', {'data-symbol': i})
    if fin_streamer_tag:
        price = fin_streamer_tag['value']
        print(i + " Stock Price:", price)
        file.write(i +", " + price + "\n")
    else:
        print("Unable to find the stock price. The structure of the webpage might have changed.")
        file.write("ERR, no price found for that ticker or website structure has changes\n")
file.close()