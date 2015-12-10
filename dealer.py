from random import randint

def shuffle(thisDeck, seed=0):
    if seed == 0:
        heart = thisDeck['hearts'][randint(0, 8)]
    else:
        rand = (int) (seed**.5) % 9
        heart = thisDeck['hearts'][rand]
    
    cards = []
    cards.append(heart)
    spades = thisDeck['spades']
    for spade in spades:
        cards.append(spade)
        
    return cards

def dealCard(cards):
    rand = randint(0, len(cards)-1)
    card = cards[rand]
    cards.remove(card) 
    return card

#returns 2 hands of 4 cards
def deal(cards):
    hand1 = []
    hand2 = []
    boardCards = []
    
    #deal 4 cards to the first player
    while len(cards) > 8: 
        hand1.append(dealCard(cards))
    #deal 4 cards to the second player
    while len(cards) > 4:
        hand2.append(dealCard(cards))
    
    return [hand1, hand2]