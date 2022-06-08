import sqlite3



connection = sqlite3.connect("test.db")
cursor=connection.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS prosjekt(id INTEGER PRIMARY KEY, name TEXT)""")


cursor.execute("""CREATE TABLE IF NOT EXISTS infoprosjekt(location TEXT, budsjett FLOAT,id INTEGER, 
FOREIGN KEY (id) REFERENCES prosjekt(id))""")



cursor.execute("INSERT INTO prosjekt VALUES( 521002401,'Nardobakken 3')")
cursor.execute("INSERT INTO prosjekt VALUES( 521042001,'E6 KVÅL')")
cursor.execute("INSERT INTO prosjekt VALUES( 521023001,'ETM Bane Nor')")

cursor.execute("INSERT INTO infoprosjekt VALUES( 'Trondheim',599000, 521002401)")
cursor.execute("INSERT INTO infoprosjekt VALUES( 'Hamar',50000000.5,521023001)")
cursor.execute("SELECT * FROM infoprosjekt")
results=cursor.fetchall()
print(results)
connection .commit()
cursor.close()

class Ansatt:
    def __init__(self,firstname,lastname, lønn, erfaring, utdanning,Email):
        self.firstname = firstname
        self.lastname = lastname
        self.lønn = lønn
        self.erfaring = erfaring
        self.utdanning = utdanning
        self.Email=Email
    def incLønn(self,inc_value):
        self.lønn=self.lønn+inc_value

    
class Utvikler(Ansatt):
    def __init__(self,firstname,lastname, lønn, erfaring, utdanning,Email,programmingLanguage):
        super().__init__(firstname,lastname, lønn,erfaring, utdanning,Email)
        self.prog_lang=[programmingLanguage]

    def addProglang(self,newLang):
        self.prog_lang.append(newLang)

    
ansatt=Ansatt("Tellef","Kydland",700000,10,"Master","tellef94@hotmail.com")   
ansatt.incLønn(100000)
print(ansatt.lønn)

utvikler=Utvikler("Tellef","Broland",700000,10,"Master","tellef94@hotmail.com","python")
utvikler.addProglang("Javascript")

utvikler.incLønn(200000)
print(utvikler.prog_lang,utvikler.lastname,utvikler.lønn)

utvikler.addProglang("Java")
print(utvikler.prog_lang)

print(ansatt.lastname)

ages=dict()
ages["age"]=22
ages["name"]="Tellef"

ageS={"Age":22,"Name":"Tellef","Lønn":[1,2,3,4,5]}


for key,value in ageS.items():
    print(key,value)


liste1=set([1,2,3,4,5])
liste2=set([1,4,1,5,6,7])
    

lst=[1,2,3,4,5,6,7,2]

even_lst=[x for x in lst if x%2 ==0]

sqre_lst=[x**2 for x in lst]

from collections import Counter
from collections import defaultdict
from collections import OrderedDict


my_counter=Counter(lst)
print(my_counter.values())
print(my_counter.most_common(1))




