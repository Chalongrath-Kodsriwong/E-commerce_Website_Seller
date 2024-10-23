from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()
text = "I love this product!"
sentiment = analyzer.polarity_scores(text)
print(sentiment)  # ได้ผลลัพธ์ที่มีคะแนนเชิงบวก ลบ และกลาง
