import pymongo
import sys
import math
import random

#connect to MongoDB via localhost
connection = pymongo.MongoClient("mongodb://localhost")
#connect to the database labeled 'grit'
db = connection.grit
#localize the users collection (the collection of users stored within the grit database)
users = db.users

#create 10000 users with defaulted stats
def createUsers():
	for id in range(0, 10000):
		user = {"_id": id, "rating": 1400, "gamesPlayed": 0, "wins":0, "losses":0}
		users.insert(user)

#picks two unique users (a winner and loser) at random
def play(n):
	for x in range(0,n):
		#pick 2 users
		user1 = users.find_one({"_id":random.randint(0, 9999)})
		user2 = users.find_one({"_id":random.randint(0, 9999)})
		while user1 == user2:
			user2 = users.find_one({"_id":random.randint(0, 9999)})
			
		updateStats(user1, user2) #user1 wins

#updates the users' stats after a game
def updateStats(winner, loser):
	winnerId = winner['_id']
	loserId = loser['_id']
	winnerGamesPlayed = winner['gamesPlayed']
	winnerRating = winner['rating']
	loserGamesPlayed = loser['gamesPlayed']
	loserRating = loser['rating']
	delta = ratingsFormula(winnerGamesPlayed, winnerRating, loserGamesPlayed, loserRating)
	
	#wgame = {"opponent" : loserId, "before" : [wr, lr], "after": [wr+delta[0], lr+delta[1]], "result" : 1}
	#lgame = {"opponent" : winnerId, "before" : [wr, lr], "after": [wr+delta[0], lr+delta[1]], "result" : 0}
	users.update_one({"_id": winnerId}, {'$inc': {"rating": delta[0], "gamesPlayed" : 1, "wins" : 1}} )
	users.update_one({"_id": loserId}, {'$inc': {"rating": delta[1], "gamesPlayed" : 1, "losses" : 1}} )

#returns a tuple with the amount the winner's and loser's ratings will change
def ratingsFormula(winnerGamesPlayed, winnerRating, loserGamesPlayed, loserRating):
        #when games played are 0, the volatility starts at 1
	winnerVolatility = .1 + (.9/(1.04**winnerGamesPlayed))
	loserVolatility = .1 + (.9/(1.04**loserGamesPlayed))

	a1 = 0.278393
	a2 = 0.230389
	a3 = 0.000972
	a4 = 0.078108
	wx = (winnerRating-1400)/(200*math.sqrt(2)) #temp variable for the winner
	lx = (loserRating-1400)/(200*math.sqrt(2)) #temp variable for the loser

	wdenom = (1 + a1*wx + a2*wx**2 + a3*wx**3 + a4*wx**4)**4
	wp = 1 - ( 1 / (2*wdenom) ) #the normal deviation
	ldenom = (1 + a1*lx + a2*lx**2 + a3*lx**3 + a4*lx**4)**4
	lp =  1 / (2*ldenom) #the normal deviation

	p = wp-lp
	multiplier = lp/(1+p)**2 if winnerRating>loserRating else wp*(1+p)**2 #underdog multiplier
	wd = math.floor( 100*winnerVolatility*multiplier )
	ld = -1*math.floor( 100*loserVolatility*multiplier )
	return [wd, ld]

def stats():
        total = 0
        max = 1400
        min = 1400
        for user in users.find():
                rating = user['rating']
                total = total + rating
                max = max if max>rating else rating
                min = min if min<rating else rating
                

        average = total / 10000
        std = 0
        
        for user in users.find():
                std = std + (average-user['rating'])**2

        std = std / 10000
        std = math.sqrt(std)
        print [average, std, max, min]

#createUsers()
play(1000000)
#updateStats( users.find_one({"_id":6748}), users.find_one({"_id":823}) )
stats()
