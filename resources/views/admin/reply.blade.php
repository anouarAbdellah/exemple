@extends('admin.app')
@section('content')
    <div class="inbox-head">
        <h3>Repondre</h3>
    </div>
    <div class="container pt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-12 col-lg-8 pb-5">


                <!--Form with header-->
                @include('flash-messages')
                {!! Form::open(['url'=>'/admin/send/'.$id,'method'=>'post']) !!}
                <div class="card border-dark rounded-0">
                    <div class="card-header p-0">
                        <div class="bg-dark text-white text-center py-2">
                            <h3><i class="fa fa-envelope"></i> Repondre</h3>
                        </div>
                    </div>
                    <div class="card-body p-3">

                        <!--Body-->
                        <div class="form-group">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                </div>
                                {!! Form::text('subject','répondre à : '.$email->subject,['class'=>'form-control','id'=>'nombre','placeholder'=>'sujet...','required'=>'required']) !!}
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-at text-info"></i></div>
                                </div>
                                {!! Form::email('email',$email->email,['class'=>'form-control','id'=>'nombre','placeholder'=>'ejemplo@gmail.com','required'=>'required']) !!}
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                </div>
                                {!! Form::textarea('message','',['class'=>'form-control','required'=>'required']) !!}
                            </div>
                        </div>

                        <div class="text-center">
                            {!! Form::submit('Envoyer',['class'=>'btn btn-dark btn-block rounded-0 py-2']) !!}
                        </div>
                    </div>

                </div>
            {!! Form::close() !!}
            <!--Form with header-->


            </div>
        </div>
    </div>
@endsection