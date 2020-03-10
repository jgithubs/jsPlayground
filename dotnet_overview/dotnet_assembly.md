# Sub-Project Overview

This project describes modules, event, event arguments, Event Emitter.

## Playlist(s)

[Dotnet](https://www.youtube.com/playlist?list=PL8598C97BA1D871C1)

[blah](https://www.youtube.com/watch?v=HjyBzx23h98)

## DotNet EXE/DLL

[Part1: How DotNet executes](https://www.youtube.com/watch?v=ruf4U9_Rbss&list=PL8598C97BA1D871C1) 

Code/Native

Code/IL/CLR/Native

### Disassembler of EXE/DLL

[Part 2: Disassembler(s)](https://www.youtube.com/watch?v=D_1Op4TBM-Y&list=PL8598C97BA1D871C1&index=2) 

* ildasm.exe (IL dis-assemble)
```python
ildasm.exe /out:moo.txt myfile.exe
```
* Manifest, metadata

[Part 3: Weak Name and Strong Name Assembly](https://www.youtube.com/watch?v=p6u7n_BPcVw&list=PL8598C97BA1D871C1&index=3) 
- Two type of assemblies
  - Strong Name: Signing with a public/private key pair
  ```python
  sn -k  MyStrongKey.snk
  sn -p  MyStrongKey.snk MyStrongKey.pub
  sn -tp MyStrongKey.pub
  ```
  - Weak Name: not signed
- Typical DotNet Install: 
  - DotNet Framework (System Assembly)
  - Runtime Environment (CLR)
- GAC (Global Assembly Cache)
  - System Wide Assemblies are stored here
  - Location: C:\Windows\Assemblies
    - MSIL
- Assembly name "FRAME_VER_PKT_Name"
  - Version (VER)
  - Culture, Typically Languange Netural, en
    - When set, it becomes a satilite assembly
  - Public Key Token (PKT)
    - Sign assembly with public/priviate
    - Use strong nameing tool
      - sn.exe -k c:\MyStrongKey.snk
      - Save in Assembly.cs
```python
[assembly: AssemblyKeyFIle("sn.exe -k c:\MyStrongKey.snk")]
```

[Part 4: Global Assembly Cache](https://www.youtube.com/watch?v=FYmRrEYyhCM&list=PL8598C97BA1D871C1&index=4) 

Installing
```python
gacUtil.exe -i myDll.dll
```
UnInstalling all, do not pass '.dll'
```python
gacUtil.exe -u myDll
```

UnInstalling a specific version
```python
gacUtil.exe -u myDll,Version=1.0.0.0,PublicKeyToken=deadbeef
```

Side-By-Side execution

[Part 5: How DotNet finds assemblies during execution](https://www.youtube.com/watch?v=FYmRrEYyhCM&list=PL8598C97BA1D871C1&index=5) 

- Figures out what version is needed
  - Checks the manifest that contains the dependent assemblies
    - These can be overwritten by configuration file
  - Checks the application configuration file (app.config)
    - app.config
    - machine.config
    - policies
  - If weak, search of the GAC is skippped
    - Searches in local directory
    - Version checking is not done for 'weak' assemblies

