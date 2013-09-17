get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  puts words = params["user_input"]
  


  if words == words.upcase
    @grandma = "STOP SHOUTING, I'M NOT DEAF!"
  else
    @grandma = "speak up sonny"
  end

  if request.xhr?
  erb :newpage, layout: false  
  else
  erb :index 
  end 

end



