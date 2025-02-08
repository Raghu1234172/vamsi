print("M.Sai Krishna")
print("21EM1A05A5")
def company():
      while True:
        username=input("Enter Username:")
        password=input("Enter Password:")
        if username=="admin" and password=="admin":
            print("welcome to company management")
            break
        else:
          print("invalid username or password")
def hospital():
        print("welcome to hospital management")
        c='''
        1.Register
        2.Login
        3.Exit
        '''
        print(c)
        ch2=int(input("enter your choice:"))
        if ch2==1:
            print("enter your name:")
            name=input()
            print("enter your email:")
            email=input()
            print("enter your loginid:")
            loginid=input()
            print("enter your password:")
            password=input()
            print("registration successful")
        elif ch2==2:
            print("enter your loginid:")
            loginid=input()
            print("enter your password:")
            password=input()
            if loginid=="admin" and password=="admin":
                print("login successful")
        elif ch2==3:
            print("Exit")
        else:
            print("invalid choice")

def pharmacy():
        print("welcome to pharmacy management")

def display():
  print("welcome to drugs management system application")
  a='''
  1.Company Management
  2.Hospital Management
  3.Pharmacy Management
  '''
  print(a)
  ch=int(input("enter your choice:"))
  if ch==1:
      company()
  elif ch==2:
      hospital()
  elif ch==3:
      pharmacy()
  else:
    print("invalid coice")
  if ch==1 or ch==2 or ch==3:
    while True:
      b='''
      1.Hospital list
      2.Pharmacy list
      3.drug list
      4.Exit'''
      print(b)
      ch1=int(input("enter your choice:"))
      if ch1==1:
        j='''
        1.Eye Hospital
        2.Dental Hospital
        3.Cardiology Hospital
        '''
        print("hospital list:",j)
      elif ch1==2:
        print("pharmacy list:")
        k='''
        1.Eye Pharmacy
        2.Dental Pharmacy
        3.Cardiology Pharmacy
        '''
        print(k)
      elif ch1==3:
        print("drug list:")
        l='''
        1.Eye drug
        2.Dental drug
        3.Cardiology drug
        '''
        print(l)
      elif ch1==4:
        print("Exit")
        break
        
    else:
        print("invalid choice")
    display()
display()