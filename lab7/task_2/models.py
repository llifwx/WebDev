class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return f"{self.name} makes a sound."

    def eat(self):
        return f"{self.name} is eating."

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return f"{self.name} says: Woof woof! ૮ • ﻌ - ა"

    def fetch(self):
        return f"{self.name} is fetching the ball. ૮ • ﻌ - ა"

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, color={self.color}, breed={self.breed} ૮ • ﻌ - ა)"


class Cat(Animal):
    def __init__(self, name, age, color, lives_left):
        super().__init__(name, age, color)
        self.lives_left = lives_left

    def speak(self):
        return f"{self.name} says: Meow! ₍^. .^₎Ⳋ"

    def climb(self):
        return f"{self.name} is climbing a tree. ₍^. .^₎Ⳋ"

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, color={self.color}, lives_left={self.lives_left} ₍^. .^₎Ⳋ)"